father Component 
    add: 
    
        getChildContext() {
           return { ruoiFly: "BachRuoi" };
        }
    
        App.childContextTypes = {
          ruoiFly: PropTypes.string
        };
        
childen Component 
    add: 
    
    Button.contextTypes = {
      color: PropTypes.string,
      ruoiFly: PropTypes.string
    };


    
        
Do not forget: 

    npm i prop-types