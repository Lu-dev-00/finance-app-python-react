from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float


# Create Transaction model
class Transaction(Base):
    __tablename__ = 'transaction'

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float)
    category = Column(String)
    description = Column(String)
    is_income = Column(Boolean)
    date = Column(String)

