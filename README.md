# Motivation as a Service

A backend service that provides motivation quotes based on different modes.

**Live Deployment:** [https://motivation-as-a-service.onrender.com](https://motivation-as-a-service.onrender.com)

## Features
- **Multiple Modes**: Positive, Brutal, Developer, Corporate, Indian.

## Installation

1.  **Clone the repository** (if applicable).
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

### Start the Server
Development mode:
```bash
npm run dev
```
Production build:
```bash
npm run build
npm start
```
The server runs on port 3000 by default.

### API Endpoints

GET requests can be made to the root URL with a `mode` query parameter.

#### **Request Format**
`GET /?mode=<mode_name>`

#### **Available Modes**
- `positive`
- `brutal`
- `developer`
- `corporate`
- `indian`

#### **Examples**

**1. Positive Mode**
```bash
curl "http://localhost:3000/?mode=positive"
```
*Output:*
```json
{
  "text": "Your potential is limitless.",
  "category": "positive"
}
```

**2. Brutal Mode**
```bash
curl "http://localhost:3000/?mode=brutal"
```
*Output:*
```json
{
  "text": "Your code is bad.",
  "category": "brutal"
}
```

**3. Developer Mode**
```bash
curl "http://localhost:3000/?mode=developer"
```
*Output:*
```json
{
  "text": "It works on my machine.",
  "category": "developer"
}
```

**4. Corporate Mode**
```bash
curl "http://localhost:3000/?mode=corporate"
```
*Output:*
```json
{
  "text": "Let's circle back on this.",
  "category": "corporate"
}
```

**5. Indian Mode**
```bash
curl "http://localhost:3000/?mode=indian"
```
*Output:*
```json
{
  "text": "Log kya kahenge?",
  "category": "indian"
}
```
