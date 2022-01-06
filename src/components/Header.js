import Button from './Button';

const Header = ({ title, onAdd, showForm }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showForm ? 'black' : 'green'}
            text={showForm ? 'Close' : 'Add'} 
            onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}



export default Header