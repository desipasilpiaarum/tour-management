import React, { useEffect, useState } from "react";
import { checkAuth } from "../utils/auth";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
} from "reactstrap";
import "../styles/home.css";

const API_URL = "http://localhost:5000/api/tours";
const UPLOAD_URL = "http://localhost:5000/api/upload";

const CATEGORY_OPTIONS = [
  "Umum",
  "Pantai",
  "Pegunungan",
  "Air Terjun",
  "Bukit",
];

const Dashboard = () => {
  const [tours, setTours] = useState([]);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
    price: "",
    city: "",
    distance: "",
    category: CATEGORY_OPTIONS[0],
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Untuk modal konfirmasi delete
  const [deleteModal, setDeleteModal] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);

  // Auth check
  useEffect(() => {
    checkAuth()
      .then((data) => {
        if (data.user.role !== "admin") {
          window.location.href = "/home";
        } else {
          setChecking(false);
        }
      })
      .catch(() => {
        window.location.href = "/login";
      });
  }, []);

  // Fetch tours from API
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, { credentials: "include" });
      const data = await res.json();
      setTours(data);
    } catch {
      setTours([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!checking) fetchTours();
    // eslint-disable-next-line
  }, [checking]);

  // Modal toggle
  const toggle = () => {
    setModal(!modal);
    setMessage(null);
    if (!modal) {
      setForm({
        title: "",
        location: "",
        description: "",
        image: "",
        price: "",
        city: "",
        distance: "",
        category: CATEGORY_OPTIONS[0],
      });
      setImageFile(null);
      setEditMode(false);
      setSelectedTour(null);
    }
  };

  // Handle form change
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Add tour
  const handleAdd = () => {
    setEditMode(false);
    setForm({
      title: "",
      location: "",
      description: "",
      image: "",
      price: "",
      city: "",
      distance: "",
      category: CATEGORY_OPTIONS[0],
    });
    setImageFile(null);
    setSelectedTour(null);
    setModal(true);
  };

  // Edit tour
  const handleEdit = (tour) => {
    setEditMode(true);
    // Pastikan kategori valid
    let categoryValue = CATEGORY_OPTIONS.includes(tour.category)
      ? tour.category
      : CATEGORY_OPTIONS[0];
    setForm({
      title: tour.title,
      location: tour.location,
      description: tour.description,
      image: tour.image,
      price: tour.price || "",
      city: tour.city || "",
      distance: tour.distance || "",
      category: categoryValue,
    });
    setImageFile(null);
    setSelectedTour(tour);
    setModal(true);
  };

  // Delete tour (show modal)
  const handleDelete = (tour) => {
    setTourToDelete(tour);
    setDeleteModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!tourToDelete) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${tourToDelete.id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        setMessage("Destinasi berhasil dihapus.");
        setDeleteModal(false);
        setTourToDelete(null);
        await fetchTours();
      } else {
        setMessage("Gagal menghapus destinasi.");
      }
    } catch {
      setMessage("Gagal menghapus destinasi.");
    }
    setLoading(false);
  };

  // Cancel delete
  const cancelDelete = () => {
    setDeleteModal(false);
    setTourToDelete(null);
  };

  // Submit form (add/edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.location || !form.description) {
      setMessage("Semua field wajib diisi.");
      return;
    }

    setSubmitting(true);

    let imageUrl = form.image;

    // Jika ada file gambar baru, upload ke backend
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      try {
        const uploadRes = await fetch(UPLOAD_URL, {
          method: "POST",
          body: formData,
        });
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          imageUrl = uploadData.imageUrl;
        } else {
          setMessage("Gagal upload gambar.");
          setSubmitting(false);
          return;
        }
      } catch {
        setMessage("Gagal upload gambar.");
        setSubmitting(false);
        return;
      }
    }

    // Kirim data tour ke backend
    try {
      let res;
      const payload = { ...form, image: imageUrl };
      if (editMode && selectedTour) {
        res = await fetch(`${API_URL}/${selectedTour.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
      }
      if (res.ok) {
        setMessage(
          editMode
            ? "Destinasi berhasil diupdate."
            : "Destinasi berhasil ditambahkan."
        );
        await fetchTours(); // Tunggu data selesai di-refresh
        setModal(false); // Baru tutup modal
        setForm({
          title: "",
          location: "",
          description: "",
          image: "",
          price: "",
          city: "",
          distance: "",
          category: CATEGORY_OPTIONS[0],
        });
        setImageFile(null);
        setEditMode(false);
        setSelectedTour(null);
        setMessage(null);
      } else {
        setMessage("Gagal menyimpan destinasi.");
      }
    } catch {
      setMessage("Gagal menyimpan destinasi.");
    }
    setSubmitting(false);
  };

  // Jangan render dashboard sebelum cek selesai
  if (checking) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div className="experience__content">
              <h1>Dashboard Admin</h1>
              <h2 className="featured__tour-title">Kelola Destinasi Wisata</h2>
              <Button color="primary" onClick={handleAdd}>
                + Tambah Destinasi
              </Button>
              {message && (
                <Alert color="info" className="mt-3">
                  {message}
                </Alert>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            {loading ? (
              <div style={{ textAlign: "center", margin: "2rem" }}>
                Loading...
              </div>
            ) : (
              <Table bordered responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Gambar</th>
                    <th>Nama Destinasi</th>
                    <th>Kategori</th>
                    <th>Lokasi</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Kota</th>
                    <th>Jarak</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {tours.length === 0 ? (
                    <tr>
                      <td colSpan="10" className="text-center">
                        Belum ada destinasi wisata.
                      </td>
                    </tr>
                  ) : (
                    tours.map((tour, idx) => (
                      <tr key={tour.id}>
                        <td>{idx + 1}</td>
                        <td>
                          <img
                            src={
                              tour.image?.startsWith("http")
                                ? tour.image
                                : `/${tour.image}`
                            }
                            alt={tour.title}
                            style={{
                              width: 80,
                              height: 50,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                        </td>
                        <td>{tour.title}</td>
                        <td>{tour.category || "-"}</td>
                        <td>{tour.location}</td>
                        <td>{tour.description}</td>
                        <td>{tour.price}</td>
                        <td>{tour.city}</td>
                        <td>{tour.distance}</td>
                        <td>
                          <Button
                            color="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(tour)}
                          >
                            Edit
                          </Button>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleDelete(tour)}
                          >
                            Hapus
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>

      {/* Modal Tambah/Edit */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>
          {editMode ? "Edit Destinasi" : "Tambah Destinasi"}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Nama Destinasi</Label>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Kategori</Label>
                  <Input
                    type="select"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Lokasi</Label>
                  <Input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Kota</Label>
                  <Input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Jarak</Label>
                  <Input
                    name="distance"
                    value={form.distance}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Deskripsi</Label>
                  <Input
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Harga</Label>
                  <Input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    type="number"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Upload Gambar</Label>
                  <Input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    required={!editMode}
                  />
                  {(imageFile || form.image) && (
                    <div style={{ marginTop: 10 }}>
                      <img
                        src={
                          imageFile
                            ? URL.createObjectURL(imageFile)
                            : form.image?.startsWith("http")
                            ? form.image
                            : `/${form.image}`
                        }
                        alt="Preview"
                        style={{
                          width: 120,
                          height: 70,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </div>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  />
                  Menyimpan...
                </>
              ) : editMode ? (
                "Update"
              ) : (
                "Tambah"
              )}
            </Button>
            <Button color="secondary" onClick={toggle} disabled={submitting}>
              Batal
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* Modal Konfirmasi Delete */}
      <Modal isOpen={deleteModal} toggle={cancelDelete}>
        <ModalHeader toggle={cancelDelete}>Konfirmasi Hapus</ModalHeader>
        <ModalBody>
          {tourToDelete && (
            <>
              Apakah Anda yakin ingin menghapus destinasi{" "}
              <b>{tourToDelete.title}</b>?
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete} disabled={loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                />
                Menghapus...
              </>
            ) : (
              "Hapus"
            )}
          </Button>
          <Button color="secondary" onClick={cancelDelete} disabled={loading}>
            Batal
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default Dashboard;