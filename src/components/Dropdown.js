import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const [items, setItems] = useState([
    { value: "qualified", text: "Qualified" },
    { value: "disqualified", text: "Disqualified" },
  ]);
  const [newItem, setNewItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { value: newItem, text: newItem }]);
      setNewItem("");
    }
  };

  const handleItemClick = (value) => {
    console.log(value); // Handle selection change if needed
    // Do not toggle isOpen state
  };
  const handleEditItem = (id) => {
    // Find the item by id
    const selectedItem = items.find((item) => item.value === id);
    if (selectedItem) {
      // Set the editItem state to the selected item's value
      setEditItem(selectedItem.value);
      // Remove the selected item from the items list
      const updatedItems = items.filter((item) => item.value !== id);
      setItems(updatedItems);
      // Set the newItem state to the selected item's value
      setNewItem(selectedItem.value);
    }
  };

  const handleDeleteItem = (id) => {
    // Remove the item from the items list
    const updatedItems = items.filter((item) => item.value !== id);
    setItems(updatedItems);
  };

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md cursor-pointer"
        >
          <div className="px-3 py-2">
            {items[0]?.text}{" "}
            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
          </div>
          {isOpen && (
            <div className="absolute z-10 top-full left-50 right-0 bg-white border rounded-md shadow-md mt-1">
              {items.map((item) => (
                <div
                  key={item.value}
                  className="flex items-center justify-between px-3 py-2 hover:bg-purple-600 hover:text-white"
                >
                  <span
                    className="cursor-pointer flex-grow"
                    onClick={() => handleItemClick(item.value)}
                  >
                    {item.text}
                  </span>
                  <div className="flex-shrink-0 flex">
                    <button
                      className="ml-2 text-gray-500 hover:text-red-500"
                      onClick={() => handleEditItem(item.value)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="ml-2 text-gray-500 hover:text-red-500"
                      onClick={() => handleDeleteItem(item.value)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}

              <input
                type="text"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                onClick={(event) => event.stopPropagation()} // Prevent dropdown from closing
                placeholder="List Name"
                className="block w-full px-3 py-2 border-t border-gray-200 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleAddItem();
                }}
                className="w-full  text-black px-4 py-2 rounded-b-md hover:bg-purple-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                + Add
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
