import React from 'react'

const CropForm = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  buttonText = 'Submit',
}) => {

  console.log(formData)
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputTitleEnglish1">English Name</label>
          <div>
            <input
              type="text"
              name="title_english"
              className="form-control"
              id="exampleInputTitleEnglish1"
              aria-describedby="titleEnglishHelp"
              placeholder="Enter English Name"
              onChange={handleChange}
              value={formData.title_english} />
          </div>
          {errors.title_english && <p>{errors.title_english}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputTitlePatois1">Patois Name</label>
          <input
            type="text"
            name="title_patois"
            className="form-control"
            id="exampleInputTitlePatois1"
            aria-describedby="titlePatoisHelp"
            placeholder="Enter Patois Name"
            onChange={handleChange}
            value={formData.title_patois} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputInsidePlant1">Can the plant live inside</label>
          <input
            type="text"
            name="inside_plant"
            className="form-control"
            id="exampleInputInsidePlant1"
            aria-describedby="InsidePlantHelp"
            placeholder="Can the plant live inside"
            onChange={handleChange}
            value={formData.inside_plant} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPlantSize1">Plant Size</label>
          <input
            type="text"
            name="plant_size"
            className="form-control"
            id="exampleInputPlantSize1"
            aria-describedby="PlantSizeHelp"
            placeholder="PlantSize"
            onChange={handleChange}
            value={formData.plant_size} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAverageYield1">Average Yield</label>
          <input
            type="text"
            name="average_yield"
            className="form-control"
            id="exampleInputAverageYield1"
            aria-describedby="AverageYieldHelp"
            placeholder="AverageYield"
            onChange={handleChange}
            value={formData.average_yield} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputHowToCare1">How to care</label>
          <input
            type="text"
            name="how_to_care"
            className="form-control"
            id="exampleInputHowToCare1"
            aria-describedby="HowToCareHelp"
            placeholder="HowToCare"
            onChange={handleChange}
            value={formData.how_to_care} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputHowToStore1">How to store</label>
          <input
            type="text"
            name="how_to_store"
            className="form-control"
            id="exampleInputHowToStore1"
            aria-describedby="HowToStoreHelp"
            placeholder="HowToStore"
            onChange={handleChange}
            value={formData.how_to_store} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDescription1">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="exampleInputDescription1"
            aria-describedby="DescriptionHelp"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputImage1">Image</label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="exampleInputImage1"
            aria-describedby="ImageHelp"
            placeholder="Image"
            onChange={handleChange}
            value={formData.image} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputInstructions1">Instructions</label>
          <input
            type="text"
            name="instructions"
            className="form-control"
            id="exampleInputInstructions1"
            aria-describedby="InstructionsHelp"
            placeholder="Instructions"
            onChange={handleChange}
            value={formData.instructions} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputSow1">Sow</label>
          <input
            type="text"
            name="sow"
            className="form-control"
            id="exampleInputSow1"
            aria-describedby="SowHelp"
            placeholder="Sow"
            onChange={handleChange}
            value={formData.sow} />
        </div>
        <div className="form-group">
          <button type="submit" className="button">{buttonText}</button>
        </div>
      </form>
    </div>
  )
}

export default CropForm