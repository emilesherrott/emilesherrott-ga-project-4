import React from 'react'

const CropForm = ({
  title = 'Likkle Pickney Plant Dem',
  formData,
  errors,
  handleChange,
  handleSubmit,
  buttonText = 'Submit',
}) => {

  console.log(formData)
  return (
    <div className="">
      <h2 className="cropform-title">{title}</h2>
      <form onSubmit={handleSubmit} className="cropform-form">
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputTitleEnglish1" className="cropform-label">English Name</label>
          <div>
            <input
              type="text"
              name="title_english"
              className="form-control cropform-input"
              id="exampleInputTitleEnglish1"
              aria-describedby="titleEnglishHelp"
              placeholder="Enter English Name"
              onChange={handleChange}
              value={formData.title_english} />
          </div>
          {errors.title_english && <p>{errors.title_english}</p>}
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputTitlePatois1" className="cropform-label">Patois Name</label>
          <input
            type="text"
            name="title_patois"
            className="form-control cropform-input"
            id="exampleInputTitlePatois1"
            aria-describedby="titlePatoisHelp"
            placeholder="Enter Patois Name"
            onChange={handleChange}
            value={formData.title_patois} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputInsidePlant1" className="cropform-label">Can the plant live inside</label>
          <select
            type="text"
            name="inside_plant"
            className="form-control cropform-input"
            id="exampleInputInsidePlant1"
            aria-describedby="InsidePlantHelp"
            placeholder="Can the plant live inside"
            onChange={handleChange}
            value={formData.inside_plant}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputPlantSize1" className="cropform-label">Plant Size (cm)</label>
          <input
            type="text"
            name="plant_size"
            className="form-control cropform-input"
            id="exampleInputPlantSize1"
            aria-describedby="PlantSizeHelp"
            placeholder="PlantSize"
            onChange={handleChange}
            value={formData.plant_size} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputAverageYield1" className="cropform-label">Average Yield</label>
          <input
            type="text"
            name="average_yield"
            className="form-control cropform-input"
            id="exampleInputAverageYield1"
            aria-describedby="AverageYieldHelp"
            placeholder="AverageYield"
            onChange={handleChange}
            value={formData.average_yield} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputHowToCare1" className="cropform-label">How to care</label>
          <input
            type="text"
            name="how_to_care"
            className="form-control cropform-input"
            id="exampleInputHowToCare1"
            aria-describedby="HowToCareHelp"
            placeholder="HowToCare"
            onChange={handleChange}
            value={formData.how_to_care} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputHowToStore1" className="cropform-label">How to store</label>
          <input
            type="text"
            name="how_to_store"
            className="form-control cropform-input"
            id="exampleInputHowToStore1"
            aria-describedby="HowToStoreHelp"
            placeholder="HowToStore"
            onChange={handleChange}
            value={formData.how_to_store} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputDescription1" className="cropform-label">Description</label>
          <textarea
            type="text"
            name="description"
            className="form-control cropform-input"
            rows="1"
            id="exampleInputDescription1"
            aria-describedby="DescriptionHelp"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}>
          </textarea>
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputImage1" className="cropform-label">Image</label>
          <input
            type="text"
            name="image"
            className="form-control cropform-input"
            id="exampleInputImage1"
            aria-describedby="ImageHelp"
            placeholder="Image"
            onChange={handleChange}
            value={formData.image} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputInstructions1" className="cropform-label">Instructions</label>
          <input
            type="text"
            name="instructions"
            className="form-control cropform-input"
            id="exampleInputInstructions1"
            aria-describedby="InstructionsHelp"
            placeholder="Instructions"
            onChange={handleChange}
            value={formData.instructions} />
        </div>
        <div className="form-group cropform-input">
          <label htmlFor="exampleInputSow1" className="cropform-label">Sow</label>
          <input
            type="text"
            name="sow"
            className="form-control cropform-input"
            id="exampleInputSow1"
            aria-describedby="SowHelp"
            placeholder="Sow"
            onChange={handleChange}
            value={formData.sow} />
        </div>
        <div className="form-group cropform-input">
          <h3 type="submit" className="cropform-button">{buttonText}</h3>
        </div>
      </form>
    </div>
  )
}

export default CropForm