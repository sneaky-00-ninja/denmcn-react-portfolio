import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
     faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt, faLock 
    } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt, faLock );
};

export default Icons;
