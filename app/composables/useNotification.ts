export const useNotification = () => {
  const toast = useToast();

  function showNotification(
    title: string,
    color:
      | "error"
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "neutral"
      | undefined,
    description?: string,
    icon?: string
  ) {
    if (icon === undefined) {
      switch (color) {
        case "error":
          icon = "mi:circle-error";
          break;
        case "success":
          icon = "i-lucide-check-circle";
          break;
        case "info":
          icon = "i-lucide-info";
          break;
        case "warning":
          icon = "i-lucide-alert-triangle";
          break;
        case "neutral":
          icon = "i-lucide-circle";
          break;
        default:
          icon = "i-lucide-bell";
      }
    }

    toast.add({
      title,
      description,
      color,
      icon,
    });
  }

  return {
    showNotification,
  };
};
