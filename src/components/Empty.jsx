//

import { useState, useEffect } from "react";
import trace from "../helper";
import EmptyImage from '../molehill.png'

function Empty() {
  return (
   <div className="empty">
   <img src={EmptyImage} alt="Empty"/>
 </div>
  );
}

export default Empty;
