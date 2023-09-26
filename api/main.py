from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel
from pydantic import BaseModel
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
import models

app = FastAPI()

# Allowed origins for CORS
origins = [
    'http://localhost:3000',
]

# Setup and configure cors middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Create Base model for a transaction
class TransactionBase(BaseModel):
    amount: float
    category: str
    description: str
    date:str
    is_income: bool
    
# Inherit from Transaction base and add Id field and config for pydantic
class TransactionModel(TransactionBase):
    id: int 

    class Config:
        orm_mode = True

# Setup database connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Sets up database dependency (creates database tables when app starts)
db_dependency = Annotated[Session, Depends(get_db)]
models.Base.metadata.create_all(bind=engine)

# --- ENDPOITS ---

@app.post("/transactions/", response_model=TransactionModel)
async def create_transaction(transaction: TransactionBase, db: db_dependency):
    db_transaction = models.Transaction(**transaction.model_dump())
    db.add(db_transaction)
    db.commit()
    db.refresh()
    return db_transaction