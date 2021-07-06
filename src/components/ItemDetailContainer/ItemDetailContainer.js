import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";

import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const { idP } = useParams();

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(idP);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item inexistente");
          return;
        }
        setItemDetail([{ id: doc.id, ...doc.data() }]);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Peticion Finalizada"));
  }, [idP]);

  return (
    <div className="detailContainerGrl container-fluid">
      <div className="detail-card">
        <ItemDetail element={itemDetail} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
