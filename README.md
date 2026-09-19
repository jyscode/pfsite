# Portfolio Site

GitHub Pages에 바로 배포할 수 있는 정적 포트폴리오입니다.

## 배포 방법

1. GitHub에서 새 Public Repository를 생성합니다. 예: `portfolio`
2. 이 폴더의 `index.html`과 `assets/` 폴더를 Repository 루트에 업로드합니다.
3. Repository의 **Settings → Pages**로 이동합니다.
4. **Build and deployment → Source**를 `Deploy from a branch`로 선택합니다.
5. Branch를 `main`, Folder를 `/(root)`로 선택하고 Save 합니다.
6. 잠시 후 `https://<github-id>.github.io/<repository>/` 형태로 접속할 수 있습니다.

## 커스텀 도메인

GitHub Pages의 **Settings → Pages → Custom domain**에서 보유 도메인을 입력한 뒤, 도메인 DNS에 GitHub Pages용 레코드를 추가하면 됩니다.

서브도메인(`portfolio.example.com`)을 사용할 경우 일반적으로 CNAME 방식이 가장 간단합니다.
