"use client";
import React, { ChangeEvent, useState } from "react";

function ShowEntries({ entriesToShow, setEntriesToShow }: any) {
  const handleEntriesChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEntriesToShow(Number(event.target.value));
  };
  return (
    <div>
      Show
      <select
        className="ml-2 border border-gray-300 rounded-md px-2 py-1"
        value={entriesToShow}
        onChange={handleEntriesChange}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>{" "}
      entries
    </div>
  );
}

export default ShowEntries;
