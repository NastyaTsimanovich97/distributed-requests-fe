interface IRequestRunnerProps {
  handleClick: () => void;
}

export function RequestRunner({ handleClick }: IRequestRunnerProps) {
  return <button onClick={handleClick}>Run Requests</button>;
}
