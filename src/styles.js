const elevatedDivBase = {
  padding: '1.5em',
  margin: '0.5em',
  backgroundColor: '#FBFBFF',
  textAlign: 'center',
  borderWidth: '2px',
  // border: 'solid gray',
  // boxShadow: '2px 2px 5px 1px #1d1c1c;',
  width: 'auto',
  
}

export const styles = {
  elevatedDiv: elevatedDivBase,

  container: {
    // ...elevatedDivBase,
    width: '500px',
    margin: '0em auto 1em'
    
  },
  
  fileSelector: {
    ...elevatedDivBase
  },
  imagePreviewContainer: {
    ...elevatedDivBase,
    backgroundColor: '#EEEEEE',
    padding: '1em'

  },
  imagePreview: {
    width: '100%',
    maxWidth: "450px"
  },
  header: {
    ...elevatedDivBase,
    marginTop: "10em"
  },
  statusBar: {
    ...elevatedDivBase,
    // textAlign: "left",
    // display: "-webkit-box"

  }
}