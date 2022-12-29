import React from "react";



function NewActivityReview() {


  return (
    <div>
      <div>
        <form>

          <fieldset class="col mb-3">
            <legend class="col-form-label">How was you experience? (rating)</legend>
            <div class="col">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" disabled="" />
                <label class="form-check-label" for="gridRadios1">
                  Very bad (1)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" disabled="" />
                <label class="form-check-label" for="gridRadios2">
                  Bad (2)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="" />
                <label class="form-check-label" for="gridRadios3">
                  Regular (3)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="" />
                <label class="form-check-label" for="gridRadios3">
                  Good (4)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="" />
                <label class="form-check-label" for="gridRadios3">
                  Very Good (5)
                </label>
              </div>
            </div>
          </fieldset>

          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Comments</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" />
            </div>
          </div>


          <button type="submit" class="btn btn-primary">Post review</button>
        </form>
      </div>
    </div>
  );
};

export default NewActivityReview;