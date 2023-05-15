import { useContext, useEffect, useState } from "react"
import ShoeContext from "../contexts/ShoeContext"
import { Offcanvas, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Shoes() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const shoeContext = useContext(ShoeContext);
  // const shoe = shoeContext.getAllProducts() || [];

  // const [searchOptions, setSearchOptions] = useState({})

  // const [search, setSearch] = useState({})
  // const [formFields, setFormFields] = useState(
  //   {
  //     name: '',
  //     brand_id: '0',
  //     color_id: '0',
  //     size_id: '0',
  //     gender_id: '0',


  //   }
  // )
  // console.log(formFields + "form fields")
  // const updateFormFields = (event) => {
  //   setFormFields({
  //     ...formFields,
  //     [event.target.name]: event.target.value
  //   });

  // };

  // useEffect(() => {
  //   (async () => {
  //     await shoeContext.getShoeSearch(search)
  //   })();
  // }, [search])

  // useEffect(() => {
  //   (() => {
  //     const searchOptions = shoeContext.getOptionsList()
  //     setSearchOptions(searchOptions);
  //     console.log(searchOptions)
  //   })();
  // }, []);



  // const searchShoes = () => {
  //   console.log(formFields)
  //   const query = { ...formFields };
  //   setSearch(query)
  // }

  // const generateSelectOptions = (choices) => {
  //   if (choices) {
  //     return choices.map((choice, index) => {
  //       return (
  //         <option key={index} value={choice[0]}>
  //           {choice[1]}
  //         </option>
  //       );
  //     });
  //   }
  // };




  return <>

    <h1> Display Shoes+ search form </h1>

    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3 d-none d-md-block  ">
          <div className="form-group row">
            <div className="col-xs-2">
              <label htmlFor="ex1">Brands</label>
              <input className="form-control" id="ex1" type="text" />
            </div>
            <div className="col-xs-2">
              <label htmlFor="ex1">Type</label>
              <input className="form-control" id="ex1" type="text" />
            </div>
          </div>
          <div className="col-xs-2 my-4">
            <div className="row">
              <div className="col" >
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option >Select Materials</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option >Select Colors</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-xs-2 my-4">
            <div className="row">
              <div className="col" >
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option >Select Size</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option >Select Genders</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-xs-2 ">
            <div className="row">
              <div className="col" >
                <label htmlFor="ex3">Min Cost</label>
                <input className="form-control" id="ex3" type="text" />
              </div>
              <div className="col">
                <label htmlFor="ex3">Max Cost</label>
                <input className="form-control" id="ex3" type="text" />
              </div>
            </div>
          </div>
        </div>


        <Button variant="primary" onClick={handleShow} className="col-md-3 d-lg-none d-md-none">
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="form-group row">
              <div className="col-xs-2">
                <label htmlFor="ex1">Brands</label>
                <input className="form-control" id="ex1" type="text" />
              </div>
              <div className="col-xs-2">
                <label htmlFor="ex1">Type</label>
                <input className="form-control" id="ex1" type="text" />
              </div>
            </div>
            <div className="col-xs-2 my-4">
              <div className="row">
                <div className="col" >
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option >Select Materials</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option >Select Colors</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-xs-2 my-4">
              <div className="row">
                <div className="col" >
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option >Select Size</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option >Select Genders</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-xs-2 ">
              <div className="row">
                <div className="col" >
                  <label htmlFor="ex3">Min Cost</label>
                  <input className="form-control" id="ex3" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="ex3">Max Cost</label>
                  <input className="form-control" id="ex3" type="text" />
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>


        <div className="col-md-9 ">
            <div className="row  mt-4">
              <div className="col-md-4 mb-3  ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3  ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3  ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3  ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 ">
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
           
         
           
           

            </div>
            
        </div>
        


      </div>
    </div>


    {/* <div className="container-fluid background">
      <h1 className='m-4'>Search a shoe</h1>
      <Form.Group className='m-4 titleFont'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Search by name" name="name" value={formFields.name} onChange={updateFormFields}>
        </Form.Control>
      </Form.Group>

      <Form.Group className='m-4 titleFont'>

        <Button className="btn mt-3 ml-3" onClick={searchShoes}>Search</Button>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>
          Brand
        </Form.Label>
        <Form.Select name='brand_id' value={formFields.brand_id} onChange={updateFormFields}>

          {generateSelectOptions(searchOptions.brands)}

        </Form.Select>
        <Form.Select name='color_id' value={formFields.color_id} onChange={updateFormFields}>

          {generateSelectOptions(searchOptions.colors)}

        </Form.Select>
        <Form.Select name='size_id' value={formFields.size_id} onChange={updateFormFields}>

          {generateSelectOptions(searchOptions.sizes)}

        </Form.Select>
        <Form.Select name='materials_id' value={formFields.materials_id} onChange={updateFormFields}>

          {generateSelectOptions(searchOptions.materials)}

        </Form.Select>
      </Form.Group>
    </div>


    <div className="tabs">
      <div className="container-fluid">
        <h1 className='mx-4 my-2 '>Choose a shoe</h1>

        {shoe.length ? (
          <div class="row row-cols-md-3">{
            shoe.map((shoe) => {
              return (

                <div class="col gy-3" key={shoe.id}>
                  <li>{shoe.name}</li>
                </div>
              );
            })}</div>
        ) : <div>
          <h5>No shoes found</h5>
        </div>}
      </div>

    </div> */}



  </>
}