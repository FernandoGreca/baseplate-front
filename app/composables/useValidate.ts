import type { IUserLogin } from "~/interfaces/user/UserLogin";
import type { IUserRegister } from "~/interfaces/user/UserRegister";

export const useValidate = () => {
  type User = Partial<IUserLogin & IUserRegister>;

  function validateUser(user: User, type: "login" | "register"): string | true {
    if (type === "register") {
      if (!user.firstName?.trim()) return "First name is required.";
      if (!user.lastName?.trim()) return "Last name is required.";
      if (!user.confirmPassword?.trim()) return "Confirm password is required.";
      if (user.password !== user.confirmPassword)
        return "Passwords do not match.";
    }

    if (!user.email?.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) return "Invalid email format.";

    if (!user.password?.trim()) return "Password is required.";
    if (user.password.length < 8)
      return "Password must be at least 8 characters.";

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/;
    if (!strongPasswordRegex.test(user.password))
      return "Password must contain uppercase, lowercase, number and special character.";

    return true;
  }

  return { validateUser };
};
