import React from "react";

function NewActivityReview() {

  return (
    <div>
      <div>
        <form>


          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">How was you experience? (rating)</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="" />
                <label class="form-check-label" for="gridRadios1">
                  Very bad (1)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                <label class="form-check-label" for="gridRadios2">
                  Bad (2)
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="" />
                <label class="form-check-label" for="gridRadios3">
                  Regular (3)
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="" />
                <label class="form-check-label" for="gridRadios3">
                  Good (4)
                </label>
              </div>
              <div class="form-check disabled">
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
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                <label class="form-check-label" for="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Post review</button>
        </form>
      </div>
    </div>
  );
};

export default NewActivityReview;