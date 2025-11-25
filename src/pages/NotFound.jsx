import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>404 - 찾을 수 없는 페이지입니다</h1>
            <p>요청하신 경로가 존재하지 않아요.</p>
            <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
                홈으로 돌아가기
            </Link>
        </div>
    );
}
