
enum STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACIVE',
  ACCEPTED = 'ACCEPTED',
  PROCESSING = 'PROCESSING',
  REJECTED = 'REJECTED',
  POSTPONED = 'POSTPONED',
}

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

  const getStatusColor = (status: string) => {
    switch(status.toUpperCase()) {
      case STATUS.ACTIVE: return '';
      case STATUS.INACTIVE: return '';
      case STATUS.ACCEPTED: return '';
      case STATUS.ACTIVE: return '';
      case STATUS.ACTIVE: return '';
      case STATUS.ACTIVE: return '';
      default: return '#000000';
    }
  }
  
  return {
    getShortId,
    getAvatarInitials,
    getStatusColor,
  }
}

export default useUtils