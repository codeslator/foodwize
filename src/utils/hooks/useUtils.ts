
enum STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACIVE',
  ACCEPTED = 'ACCEPTED',
  COMPLETED = 'COMPLETED',
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

  const getStatusColor = (status: string): string => {
    switch(status.toUpperCase()) {
      case STATUS.ACTIVE: return '#A5CF8D';
      case STATUS.INACTIVE: return '#5E565A';
      case STATUS.ACCEPTED: return '#A5CF8D';
      case STATUS.COMPLETED: return '#A5CF8D';
      case STATUS.PROCESSING: return '#FFD489';
      case STATUS.REJECTED: return '#F1856A';
      case STATUS.POSTPONED: return '#BCD4DE';
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