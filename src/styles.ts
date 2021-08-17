const elevatedDivBase = {
  padding: '2em',
  margin: '0.5em',
  backgroundColor: '#FBFBFF',
  textAlign: 'center',
  borderWidth: '2px',
  boxShadow: '2px 2px 5px 1px #1d1c1c;',
  width: 'auto',
}

export const styles = {
  // container: {
  //   display: 'flex-start',
  //   textAlign: 'initial',
  //   justifyContent: 'space-between',
  // },
  elevatedDiv: elevatedDivBase,
  // jitsiSession: {
  //   ...elevatedDivBase,
  //   textAlign: '-webkit-center'
  // },
  // dashboard: {
  //   ...elevatedDivBase,
  //   // display: 'inline-block',
  //   margin: '0 auto 1em',
  // },
  container: {
    // ...elevatedDivBase,
    width: '50%',
    margin: '5em auto 1em',
    maxWidth: 'max-content',
  },
  // footer: {
  //   ...elevatedDivBase,
  //   width: '50%',
  //   margin: '1em auto 0',
  //   maxWidth: 'max-content'
  // },
  // sectionHeadline: {
  //   marginBottom: "1em", 
  //   backgroundColor: "#0B4F6C", 
  //   color: "#FBFBFF" 
  // },
  fileSelector: {
    ...elevatedDivBase,
    textAlign: 'center'
  },
  imagePreviewContainer: {
    ...elevatedDivBase,
    padding: '1em',

    textAlign: 'center'
  },
  imagePreview: {
    width: '100%',
    maxWidth: "450px"
  }
}