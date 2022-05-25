
const useUtils = () => {

  const getShortId = (longId: string): string => {
    if(Boolean(longId) && longId.length > 5) {
      const shortId = longId.slice(-6)
      return shortId;
    }
    return '';
  };
  
  const getAvatarInitials = (firstName: string, lastName: string): string => {
    const avatar = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&color=fff&format=svg`
    return avatar;
  };
  
  return {
    getShortId,
    getAvatarInitials,
  }
}

export default useUtils