import Spoiler from './components/spoiler/Spoiler';
import RangeInput from './components/input/RangeInput';
import LoginForm from './components/login/LoginForm';
import PasswordConfirm from './components/password/PasswordConfirm';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      {/* Задача 1 */}
      <p>Задача 1 про Spoiler</p>
      <Spoiler
        header={<h1>+ Заголовок (при нажатии мышом прячем или отображаем какой-то контент)</h1>}
        open>
        Какой-то контент:
        <p>
          лорем іпсум тралівалі і тп.
        </p>  
      </Spoiler>

      {/* Задача 2 */}
      <p>Задача 2 про RangeInput</p>
      <RangeInput min={3} max={10}/>

      {/* Задача 3 */}
      <p>Задача 3 про LoginForm</p> 
      <LoginForm onLogin={console.log}/>

      {/* Задача 4 */}
      <p>Задача 4 про PasswordConfirm</p>
      <PasswordConfirm onConfirm={console.log}/>

      {/* Задача 5 */}
      <p>Задача 5 про Carousel</p>
      <Carousel images={["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]} 
      />
    </div>
  );
}

export default App;
