const { app, BrowserWindow, screen } = require("electron");
const path = require("path");
// Hot Reload 추가
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  awaitWriteFinish: true, // 파일 변경 완료 후 재시작
});

let mainWindow;
app.on("ready", () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize; // 현재 화면 크기 가져오기

  mainWindow = new BrowserWindow({
    width: width, // 화면의 전체 너비
    height: height, // 화면의 전체 높이
    frame: false, // 창 프레임 제거
    transparent: true, // 투명 배경
    alwaysOnTop: true, // 항상 위에 띄우기
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.setIgnoreMouseEvents(true); // 마우스 클릭 무시
  mainWindow.loadFile("index.html");
});
