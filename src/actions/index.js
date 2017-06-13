export const EMPEROR_SELECTED ='EMPEROR_SELECTED';

export function selectEmperor(emperor) {
  return {
    type: EMPEROR_SELECTED,
    payload: emperor
  }
};

export const COUNT = 'COUNT';

export function count(){
  return {
    type: COUNT
  }
}