import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert2

const Post = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ title: "", price: "", image: "" });
  const { data, isPending, isError, error } = useQuery({
  
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await fetch("https://dummyjson.com/products").then((res) => res.json());
        console.log(response.products);
        
        return response.products;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const queryClient = useQueryClient();

  // Create Product Mutation
  const createMutation = useMutation({
    mutationFn: async ({ title, price, image }) => {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, images: [image] }),
      });
      return response.json();
    },
    onSuccess: (newProduct) => {
      queryClient.setQueryData(["products"], (curEle) => [newProduct, ...curEle]);
      setShowCreateForm(false);
      setNewProduct({ title: "", price: "", image: "" });

      // Show success alert for create
      Swal.fire({
        title: "Success!",
        text: "Product created successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    onError: (error) => {
      // Show error alert for create
      console.log(error);
      
      Swal.fire({
        title: "Error!",
        text: "Failed to create product. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  // Delete Product Mutation
  const deleteMutation = useMutation({
    mutationFn: async (productId) => {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      });
      return response.json();
    },
    onSuccess: (data, productId) => {
      queryClient.setQueryData(["products"], (curEle) => curEle.filter((product) => product.id !== productId));

      // Show success alert for delete
      Swal.fire({
        title: "Success!",
        text: "Product deleted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    onError: (error) => {
      
      console.log(error);
      // Show error alert for delete
      Swal.fire({
        title: "Error!",
        text: "Failed to delete product. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  // Update Product Mutation
  const updateMutation = useMutation({
    mutationFn: async ({ productId, title, price, image }) => {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, images: [image] }),
      });
      return response.json();
    },
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(["products"], (curEle) =>
        curEle.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
      );

      // Show success alert for update
      Swal.fire({
        title: "Success!",
        text: "Product updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    onError: (error) => {
      console.log(error);
      // Show error alert for update
      Swal.fire({
        title: "Error!",
        text: "Failed to update product. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  // Handle Create Button Click
  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  // Handle Create Form Submission
  const handleCreateFormSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(newProduct);
  };

  // Handle Input Changes in the Create Form
  const handleCreateInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Update Button Click
  const handleUpdate = (productId, currentTitle, currentPrice, currentImage) => {
    Swal.fire({
      title: "Update Product",
      html:
        `<input id="swal-title" class="swal2-input" placeholder="Title" value="${currentTitle}">` +
        `<input id="swal-price" class="swal2-input" placeholder="Price" value="${currentPrice}">` +
        `<input id="swal-image" class="swal2-input" placeholder="Image URL" value="${currentImage}">`,
      focusConfirm: false,
      preConfirm: () => {
        const title = Swal.getPopup().querySelector("#swal-title").value;
        const price = Swal.getPopup().querySelector("#swal-price").value;
        const image = Swal.getPopup().querySelector("#swal-image").value;
        if (!title || !price || !image) {
          Swal.showValidationMessage("Please fill in all fields");
        }
        return { title, price, image };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        updateMutation.mutate({ productId, ...result.value });
      }
    });
  };

  // Handle Delete Button Click
  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(productId);
      }
    });
  };

  if (isPending) return <img className="d-block mx-auto mt-5" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading" />;  if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <>
      {/* Create Product Button */}
      <Button variant="success" className="m-3" onClick={handleCreateClick}>
        Add Product
      </Button>

      {/* Create Product Form Modal */}
      <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateFormSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newProduct.title}
                onChange={handleCreateInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleCreateInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={newProduct.image}
                onChange={handleCreateInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Add Product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Display Products */}
      <div className="d-flex justify-content-center" style={{ flexWrap: "wrap" }}>
        {data?.map(({ title, id, price, images,warrantyInformation,rating }) => (
          <Card className="m-3 p-2" key={id} style={{ width: "18.5rem" }}>
            <Card.Img className="mx-5" style={{height:"200px", width:"200px", objectFit:"contain"}} variant="center" src={images[0]} /> <hr  className="m-0"/>
            <Card.Body >
              <Card.Title className="m-0">{title}</Card.Title>
              <Card.Text className="m-0">Rs.{price}</Card.Text>
              <p className="text-secondary mb-0">{warrantyInformation}</p>
              <p className="text-secondary mt-0 mb-1">Ratings: {rating} <img style={{height:"20px", width:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84W-kLJR_e_e5mBXROh3z0iFO1BlGxiDK7A&s" alt="" /></p>
              <Button variant="primary" className="me-2" onClick={() => handleUpdate(id, title, price, images[0])}>

                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Post;