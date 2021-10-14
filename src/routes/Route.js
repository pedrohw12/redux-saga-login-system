import { Route } from "react-router-dom";

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return (window.location.href = "/login");
  }

  if (signed && !isPrivate) {
    return (window.location.href = "/home");
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
