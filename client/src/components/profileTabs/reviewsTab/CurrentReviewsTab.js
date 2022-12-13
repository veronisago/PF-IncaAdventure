import React from "react";

function CurrentReviewsTab() {



  return (
    <div>

      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="row mt-2">
            <div class="col-md-6"><label class="labels">Activity (que salgan las que compro y que pueda hacer la review pasada la fecha y hora de la actividad)</label><input type="text" class="form-control" /></div>
            <div class="col-md-6"><label class="labels">Rating: 1-5 (checkbox)</label><input type="text" class="form-control" /></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12"><label class="labels">You experience was:  (Definitely never again., very bad, bad, regular, good, very good, Excelent!)</label><input type="text" class="form-control" /></div>
            <div class="col-md-12"><label class="labels">Posted comments</label><input type="text" class="form-control" /></div>

          </div>
          <div class="row mt-3 ">
            <div class="col-md-4"><label class="labels">?</label><input type="text" class="form-control" /></div>
          </div>

          <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Edit Review</button></div>
        </div>
      </div>
    </div>

  )
};

export default CurrentReviewsTab;