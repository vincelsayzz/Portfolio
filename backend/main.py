"""
FastAPI backend for the portfolio site.

Run locally with:
    uvicorn main:app --reload --port 8000

Then visit http://localhost:8000/api/portfolio to see the JSON payload
the React frontend consumes. All the actual content lives in data.py -
this file just wires it up and serves it.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from data import PORTFOLIO_DATA

app = FastAPI(title="Vince Keth Maarat - Portfolio API", version="1.0.0")

# Allow the Vite dev server (and any other origin during local dev) to call
# this API. Tighten allow_origins to your real deployed frontend domain
# before shipping this to production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Portfolio API is running. See /api/portfolio for data."}


@app.get("/api/portfolio")
def get_portfolio():
    """Single endpoint that returns everything the frontend needs in one call:
    hero info, education, projects, certifications, and social links."""
    return PORTFOLIO_DATA


@app.get("/api/health")
def health_check():
    return {"status": "ok"}
