# 🟩 Password Generator

A simple and modern password generator built with **HTML, CSS, and JavaScript**, featuring a neon Matrix-style background and customizable password rules.

---

## 🚀 Features

- Generate secure random passwords with one click
- Choose custom password length (1–50)
- Toggle **symbols & numbers** on/off
- Copy the generated password to clipboard
- Matrix-style animated background canvas
- Fully responsive UI (mobile, tablet, desktop)

---

## 🎨 Demo Preview

The app includes:

- A dark UI with green accents
- A “Matrix rain” animation using `<canvas>`
- A clean card layout for inputs and outputs

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3 (responsive design)**
- **Vanilla JavaScript**
- Canvas 2D API

---

## 📌 How It Works

### 1. Choose Password Length

The number input allows values between **0 and 50**.  
The length auto-corrects itself if the user types below 0 or above 50.

### 2. Toggle Symbols

- **ON** → Only letters (A–Z, a–z)
- **OFF** → Full character set (letters, digits, symbols)

### 3. Generate Password

Click the **Generate** button to display the password.

### 4. Copy Password

Click the result area to instantly copy the password using the Clipboard API.

---

## 📁 Project Structure

/index.html
/style.css
/index.js

---

## 📜 Code Highlights

### ✔ Input validation

Prevents invalid length values:

```js
size.addEventListener('input', () => {
  const min = parseInt(size.min)
  const max = parseInt(size.max)

  if (size.value < min) size.value = min
  if (size.value > max) size.value = max
})


✔ Password generation

Uses two modes depending on the checkbox:


if (!box.checked) {
    res += characters[Math.floor(Math.random() * characters.length)]
} else {
    res += characters[Math.floor(Math.random() * 52)]
}

✔ Copy to clipboard

navigator.clipboard.writeText(text)

✔ Matrix Effect

Full-screen animated canvas that renders random falling characters.


📦 Installation

1- Clone the repo:

git clone https://github.com/yourusername/password-generator.git

2- Open index.html in your browser — no dependencies required.

🧩 Future Improvements

-Add dark/light mode

-Add strength indicator

-Add “exclude similar characters” option

-Add “copy success” animation

📝 License

This project is free to use and modify.


---

If you want, I can also:

✅ Make you a GitHub project thumbnail
✅ Improve your repo description
✅ Create version tags (v1.0.0)

Just say the word.
```
