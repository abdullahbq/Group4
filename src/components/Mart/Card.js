import React from "react"
import Image from "../Images/Images"

const Card = ({ item }) => {
  return (
    <div className="row justify-content-center">
      {item.map((Val, id) => {
        return (
          <div key={id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center shadow mb-4 border-primary">
              <div className="card-img">
                <Image
                  className="shadow"
                  filename={`${Val.image}.jpg`}
                  style={{
                    margin: "0 auto",
                  }}
                  alt={Val.name}
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>{Val.name}</h4>

                  <h4 className="text-danger fw-bold">Rs {Val.price}</h4>
                </div>
                <small className="card-text">{Val.description}</small>
              </div>
              <div className="card-footer">
                <button type="button" class="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Card
