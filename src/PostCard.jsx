import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

import suka from "./assets/suka.png";
import komentar from "./assets/komentar.png";
import simpan from "./assets/simpan.png";

const PostCard = () => {
  return (
    <Card className="mb-4 shadow-sm post">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="rounded-circle me-3"
          />
          <div>
            <strong>adelexplorer</strong>
            <br />
            <small className="text-muted">12/09/24</small>
          </div>
        </div>

        <Card.Title>
          Panduan Singkat untuk Pemula di Mentawai: Dari Transportasi hingga
          Rekomendasi Tempat Makan
        </Card.Title>
        <Card.Text>
          Buat teman-teman yang baru pertama kali ke Mentawai, berikut beberapa
          tips dasar dari pengalaman saya:
          <ol>
            <li>
              Transportasi: Ada kapal feri dari Padang yang biasanya berangkat
              pagi. Pilih kelas yang nyaman karena perjalanan bisa cukup
              panjang, sekitar 10 jam!
            </li>
            <li>
              Penginapan: Untuk pemula, saya rekomendasikan menginap di sekitar
              Pantai Mapadegat di Pulau Sipora. Area ini dekat dengan banyak
              spot bagus.
            </li>
            <li>
              Makanan: Jangan lupa coba keladi bakar dan ikan bakar sambal khas
              Mentawai—rasanya benar-benar khas dan bikin nagih!
            </li>
          </ol>
          Kalau ada yang punya tips tambahan atau rekomendasi lain, yuk berbagi
          di komentar! 😊
        </Card.Text>
        <div className="d-flex justify-content-between">
          <p>35 ribu - suka</p>
          <p>12 - komentar</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="komentar">
            <span>
              <img src={suka} className="me-2" alt="" />
              Suka
            </span>
            <span>
              <img src={komentar} className="me-2" alt="" />
              Komentar
            </span>
          </div>
          <span>
            <img src={simpan} alt="" />
            Simpan
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
