export const formatTime = (time: string): string => {
  return new Date(time).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDateTime = (time: string): string => {
  return new Date(time).toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatIconUrl = (icon: string): string => {
  return icon.replace("//", "https://");
};
