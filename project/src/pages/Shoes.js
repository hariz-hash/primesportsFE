import { useContext, useEffect, useState } from "react"
import ShoeContext from "../contexts/ShoeContext"
import { Offcanvas, Button, Form } from 'react-bootstrap';

export default function Shoes() {

  const shoeContext = useContext(ShoeContext);
  const shoe = shoeContext.getAllProducts();
  const [searchOptions, setSearchOptions] = useState({})
  const [search,setSearch] = useState({})
  const [canvasSearch, setCanvasSearch] = useState(false)
  const [formFields, setFormFields] = useState(
    {
      model: '',
      brand_id: 0

    }
  )

  const updateFormFields = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    });

  };

  // useEffect(() =>{
  //     (async () =>{
  //         await shoeContext.getShoeSearch(search)
  //     })();
  // },[search])
  useEffect(() => {
    (async () => {
      const searchOptions = await shoeContext.getSearchOptions();
      await setSearchOptions(searchOptions);
      console.log(searchOptions + "adw")
    })();
  }, []);

  const searchShoes = () => {
    console.log(formFields)
    const query = { ...formFields };
    setSearch(query)
  }

  // const generateSelectOptions = (choices) => {
	// 	if (choices) {
	// 		return choices.map((choice, index) => {
	// 			return (
	// 				<option key={index} value={choice[0]}>
	// 					{choice[1]}
	// 				</option>
	// 			);
	// 		});
	// 	}
	// };

  const displayCanvas = () => setCanvasSearch(true)
  const closeCanvas = () => setCanvasSearch(false)

  return <>

    <h1> Display Shoes+ search form </h1>
    <Button variant="primary" onClick={displayCanvas}>
      Launch
    </Button>

    <Offcanvas show={canvasSearch} onHide={closeCanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              Brand
            </Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formFields.model}
              onChange={updateFormFields}>

            </Form.Control>
          </Form.Group>
          {/* <Form.Group>
            <Form.Select aria-label="Brand"
            name="brand_id"
            value={formFields.brand_id}
            onChange={updateFormFields}>
           {generateSelectOptions(
												searchOptions.brand
											)}
            </Form.Select>
          </Form.Group> */}

        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  </>
}