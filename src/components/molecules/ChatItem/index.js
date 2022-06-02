import {StyleSheet} from 'react-native';
import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

export default function ChatItem({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}

const styles = StyleSheet.create({});
