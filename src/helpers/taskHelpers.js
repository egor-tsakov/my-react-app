// Функция вычисляет яркость цвета и
// возвращает 0 если темный и 1 если светлый
export const getColorType = (hex) => {
  hex = hex.substring(1);

  const rgb = parseInt(hex, 16);

  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const blue = (rgb >> 0) & 0xff;

  const luma = 0.3 * red + 0.59 * green + 0.11 * blue;

  return luma < 40 ? 0 : 1;
};

// Функиця возвращает допустимый id для новой задачи
export const getCounter = (tasks) => {
  tasks.sort((a, b) => a.id < b.id ? 1 : -1);
  return (tasks && tasks[0]) ? (tasks[0].id + 1) : 1;
};

export const validateTask = (values) => {
  const errors = {};
  if (!values?.title) {
    errors.title = 'Назовите задачу';
  }
  if (!values?.content) {
    errors.content = 'Опишите задачу';
  }
  if (!values?.color) {
    errors.color = 'Выберите цвет';
  }
  return errors;
};
