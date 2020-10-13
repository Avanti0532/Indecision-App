console.log('App.js is running');

const app = {
    title: 'Indecisive app',
    subTitle: 'Let computer ease your life',
    options: []
}

const onFormSubmit = (e)=>{
   e.preventDefault();
   const option = e.target.elements.option.value;
   if(option){
       app.options.push(option);
       e.target.elements.option.value = '';
       renderTemplate();
   }
  
};

const removeAll = ()=>{
    app.options = [];
    renderTemplate();
};

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderTemplate = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
    
        </div>);

    ReactDOM.render(template, appRoot);    
}


const appRoot = document.getElementById('app');
renderTemplate();





