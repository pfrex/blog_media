import React from "react";

let post =
  "aergaerg er aerg ruig aiergh eriugh aieurg lskdjfh sd  dsk ewui aiweufh iauwer  ewiaf oaweif aerig aeroig oerg eroig eori oaier oaeirg oae;irjg ;aeoergaerg esr er rsth rth wrt lskdjfh sd  dsk ewui aiweufh iauwer  ewiaf oaweif aerig aeroig oerg eroig eori oaier oaeirg oae;irjg ;aeoergaerg esr er rsth rth wrt lskdjfh sd  dsk ewui aiweufh iauwer  ewiaf oaweif aerig aeroig oerg eroig eori oaier oaeirg oae;irjg ;aeoergaerg esr er rsth rth wrt lskdjfh sd  dsk ewui aiweufh iauwer  ewiaf oaweif aerig aeroig oerg eroig eori oaier oaeirg oae;irjg ;aeoergaerg esr er rsth rth wrt lskdjfh sd  dsk ewui aiweufh iauwer  ewiaf oaweif aerig aeroig oerg eroig eori oaier oaeirg oae;irjg ;aeoergaerg esr er rsth rth wrt";

function BlogPost() {
  // may use a styled hr element to draw lines that will separate blog posts instead of using a separate background color
  return (
    <div className="shadow-lg p-3 m-5 bg-primary rounded">
      <div className="text-left m-2">
        <p>{"Oct 25th 2019"}</p>
        <h5 className="text-center">{"Title"}</h5>
        <div>{post}</div>
        <div className="mt-5">{"images will go here."}</div>
      </div>
    </div>
  );
}

export default BlogPost;
