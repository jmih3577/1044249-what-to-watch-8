import {useState, FormEvent, ChangeEvent} from 'react';


function AddReviewForm(): JSX.Element {
  const stars: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const [userRate, setUserRate] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [userText, setUserText] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => evt.preventDefault()}
      >
        <div className="rating">
          <div className="rating__stars">
            {stars.map((star, id) => (
              <>
                <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star}
                  checked={userRate[id]}
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                    const value = target.checked;
                    userRate.map((rating, id) => {
                      userRate[id] = false;
                    });
                    setUserRate([...userRate.slice(0, id), value, ...userRate.slice(id + 1)]);
                  }}
                />
                <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
              </>
            ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={userText}
            onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
              const value = target.value;
              setUserText(value);
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
