import { Card } from "react-bootstrap";

const ProfileCard = () => {
  return (
    <Card className="mb-4 shadow-sm profile">
      <Card.Body className="text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="rounded-circle mb-3"
        />
        <Card.Title>Adel Tria Jasmen</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">@adelexplorer</Card.Subtitle>
        <Card.Text>
          <p className="deskripsiprofile">
            Halo, saya Adel, seorang mahasiswa yang suka travelling dan senang
            menjelajahi alam serta budaya unik di setiap sudut Indonesia.
          </p>
        </Card.Text>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <p className="gabung">Bergabung Sejak</p>
            <p className="gabung">Domisili</p>
          </div>
          <div>
            <p className="tanggalgabung text-muted">15 Agustus 2023</p>
            <p className="tanggalgabung text-muted">Mentawai</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
