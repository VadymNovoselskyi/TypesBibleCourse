export function submitData<T extends object>(data: T) {
  return {
    ...data,
    timestamp: new Date(),
  };
}

const data = [
  {
    id: 123,
    title: "This is a fake title!",
  },
];

const submittedUsers = data.map(submitData);
