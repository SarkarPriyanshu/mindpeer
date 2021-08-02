import axios from "axios";

export const Flickr = axios.create({
  baseURL: "https://www.flickr.com",
});

// FOR Searching Tags
// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=da882cb7d784ac6c7783c3508d61b607&tags=cars&format=json&nojsoncallback=1&api_sig=b654d07e382cd0340d64178764b9bd78E
