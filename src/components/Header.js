import "../config.js";
import { Title } from "../config.js";

function Header() {
    return(
        <div className="container">
    <header className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 mb-4 border-bottom">
        <a href="#" className="d-flex align-items-center mb-3 mb-md-0 text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
                <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">{Title}</span>
        </a>

        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <a href="index.php" className="nav-link active active bg-success text-white" aria-current="page">หน้าแรก</a>
            </li>

            <li className="nav-item"><a href="#activity" className="nav-link text-green">ช่องทางการติดต่อ</a></li>

        </ul>
    </header>
</div>
    );
}

export default Header;