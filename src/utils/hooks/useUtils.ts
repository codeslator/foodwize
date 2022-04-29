
const useUtils = () => {

  const getShortId = (longId: string) => {
    const shortId = longId.slice(-6)
    return shortId;
  };
  
  const getAvatarInitials = (firstName: string, lastName: string) => {
    const avatar = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&color=fff&format=svg`
    return avatar;
  };
  
  return {
    getShortId,
    getAvatarInitials,
  }
}

export default useUtils