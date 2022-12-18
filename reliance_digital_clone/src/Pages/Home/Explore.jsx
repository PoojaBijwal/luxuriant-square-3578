import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const Explore = ({ url }) => {
  return (
    <div className="watch" style={{ width: "auto", margin:"auto auto 10px auto"}}>
      <div
        style={{
          width: "95%",

          display: "flex",
          gridTemplateColumns: "repeat(5,1fr)",
          // border:"2px solid blue",
          gap: "3%",
          imageHeight: "100%",
          imageWidth: "100%",
          margin: "auto auto auto 80px",
        }}
      >
        <Stack data-cy="watch">
          <Image
            data-cy="watch-image" 
            src={url}
            style={{ width: "150px", height: "220px" }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Explore;
