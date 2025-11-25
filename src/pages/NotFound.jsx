export default function NotFound() {
    return (
        <div style={{ padding: 20, textAlign: "center" }}>
            <h2>404 - 찾을 수 없는 페이지입니다</h2>
            <p style={{ marginTop: 10 }}>잘못된 주소로 접근하셨어요.</p>

            <a
                href="/"
                style={{
                    display: "inline-block",
                    marginTop: 20,
                    padding: "10px 16px",
                    background: "#4a73ff",
                    color: "white",
                    borderRadius: 8,
                    textDecoration: "none"
                }}
            >
                홈으로 돌아가기
            </a>
        </div>
    );
}
