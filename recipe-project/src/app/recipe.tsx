interface Props {
  title: string;
  picturePath: string;
  pictureAlt: string;
  prepTime: string;
  isVegan: boolean;
  portions: number;
  ingredients: string[];
  preparation: string[];
}

const Recipe = ({ title, picturePath, pictureAlt }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={picturePath} alt={pictureAlt}></img>
    </>
  );
};

export default Recipe;
