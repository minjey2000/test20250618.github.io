let rectangles = []; // 存儲所有圓角矩形的資訊

function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布大小與視窗相同
  background("#ff008e"); // 設定背景顏色為粉紅色
}

function draw() {
  // 每一幀都新增一個隨機矩形
  let x = random(width), // 隨機生成矩形的 x 位置
      y = random(height); // 隨機生成矩形的 y 位置

  if (random() < 0.5) { // 50% 機率選擇第一種矩形類型
    let textLabel = random(["HELLO", "DATA", "CREATIVE", "CODING"]); // 從文字選項中隨機選擇
    let rectData = { // 建立一個矩形物件
      x: x, // 設定矩形的 x 位置
      y: y, // 設定矩形的 y 位置
      w: 200, // 固定矩形的寬度為 200
      h: 50, // 固定矩形的高度為 50
      r: 20, // 設定矩形的圓角半徑為 20
      text: textLabel, // 設定矩形內的文字
      textColor: color(255), // 設定文字顏色為白色
      bgColor: color(128), // 初始矩形顏色為灰色
      isHovered: false // 記錄該矩形是否被點擊，預設為 false
    };
    rectangles.push(rectData); // 將這個矩形物件存入陣列
  } else { // 50% 機率選擇第二種矩形類型
    let myText = random(["美感計畫", "市北教", "草間彌生", "P5好好玩"]); // 從不同文字選項中隨機選擇
    let w = textWidth(myText); // 計算該文字的寬度
    
    let rectData = { // 建立一個矩形物件
      x: x, // 設定矩形的 x 位置
      y: y, // 設定矩形的 y 位置
      w: w + 50, // 矩形的寬度依據文字長度而變化，並額外增加 50px 讓其更可讀
      h: 50, // 固定矩形高度為 50
      r: 20, // 設定矩形的圓角半徑為 20
      text: myText, // 設定矩形內的文字
      textColor: color(0), // 設定文字顏色為黑色
      bgColor: color(255), // 初始矩形顏色為白色
      isHovered: false // 記錄該矩形是否被點擊，預設為 false
    };
    rectangles.push(rectData); // 將這個矩形物件存入陣列
  }

  background("#ff008e"); // **讓背景保持粉紅色，避免畫面變白**
  
  // 重新繪製所有矩形
  for (let rectData of rectangles) { // 遍歷存儲的矩形陣列
    fill(rectData.isHovered ? color(173, 255, 47) : rectData.bgColor); 
    // 如果該矩形被點擊過（isHovered 為 true），填充顏色改為螢光綠，否則使用原本顏色

    rect(rectData.x, rectData.y, rectData.w, rectData.h, rectData.r); 
    // 繪製圓角矩形，位置 (x, y)，寬 (w)，高 (h)，圓角半徑 (r)

    fill(rectData.textColor); // 設定文字顏色
    textSize(30); // 設定文字大小為 30px
    text(rectData.text, rectData.x + 20, rectData.y + 40); 
    // 在矩形內顯示文字，x 位置稍微偏右 20px，y 位置稍微往下 40px 讓文字置中
  }
}

// 滑鼠點擊時檢查是否點在矩形內
function mousePressed() {
  for (let rectData of rectangles) { // 遍歷所有矩形
    if (
      mouseX > rectData.x && // 滑鼠 x 位置大於矩形左側
      mouseX < rectData.x + rectData.w && // 滑鼠 x 位置小於矩形右側
      mouseY > rectData.y && // 滑鼠 y 位置大於矩形頂部
      mouseY < rectData.y + rectData.h // 滑鼠 y 位置小於矩形底部
    ) {
      rectData.isHovered = !rectData.isHovered; // **切換矩形的點擊狀態（變色與還原）**
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 網頁視窗變動時重新調整畫布
}

